const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!apiRes) {
    throw new Error(`breeds/${animal} Breed list fetch has some error`);
  }

  return apiRes.json();
};

export default fetchBreedList;
