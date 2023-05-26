export const convertModuleOperationPermissionsIDsToTitleCase = (
  inputString: string
) => {
  // Split the input string into an array of words
  const words = inputString.split(/[-.]/);

  // Capitalize the first letter of each word
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Join the capitalized words with a space or >
  const convertedString = capitalizedWords.join(" > ");

  return convertedString;
};

export const doContainsSpecialCharacters = (str: string) => {
  const regex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
  return regex.test(str);
};
