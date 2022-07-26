import express from 'express';
import session from 'express-session';
import { validateSubmission } from "./services/validationService.js";
import { engine } from 'express-handlebars';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}))

app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get("/", (req, res) => {
  if(req.session.context) {
    let context = req.session.context;
    if(!req.session.error) {
      res.render("home", { submission: `${context.submission}` });
    } else if(req.session.error) {
      res.render('home', { 
        error: req.session.error, 
        submission: `${context.submission}`  
      });
      delete req.session.error;
    }
  } else {
    res.render('home');
  } 
});

app.post("/", async (req, res) => {
  let {submission} = req.body;
  let isValid = await(validateSubmission(submission));
  if(isValid) {
      res.redirect(303, '/success');
    } else {
      req.session.error = 'Incorrect username or password';
      req.session.context = { submission };
      res.redirect("/");
    }
  }
);

app.get('/success', (req, res) => {
  res.render('success');
});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}.`);
});

export { app };