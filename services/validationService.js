//determine if data (submission) is valid

const validateSubmission = (submission) => {
  //Adding a basic regex to validate any alphanumeric entry up to 10, including spaces except as the first char
  let submissionRegex = /^(?!\s)[a-zA-Z0-9 ]{0,10}$/;
  let submissionResult = submissionRegex.test(submission);
  if(submissionResult) {
    return true;
  } else {
    return false;
  }
};

export { validateSubmission };