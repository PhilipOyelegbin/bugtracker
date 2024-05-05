import * as yup from 'yup';

export const issueSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
});

// check validity
issueSchema
  .isValid({
    title: 'Test',
    description: "This is a test description",
  })
  .then(function (valid) {
    valid; // => true
  });

// you can try and type cast objects to the defined schema
issueSchema.cast({
  title: 'jimmy',
  description: 'This is a test description',
});
// => { title: 'jimmy', description: 24 }