import BlogLayout from 'src/layouts/BlogLayout'

import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
} from '@redwoodjs/web'
const onSubmit = (data) => {
  console.log(data)
}
const ContactPage = () => {
  return (
    <BlogLayout>
      <Form onSubmit={onSubmit}>
        <label htmlFor="name" style={{ display: 'block' }}>
          Name
        </label>
        <TextField
          name="name"
          style={{ display: 'block' }}
          validation={{ required: true }}
        />
        <FieldError name="name" />
        <label htmlFor="email" style={{ display: 'block' }}>
          Email
        </label>
        <TextField
          name="email"
          style={{ display: 'block' }}
          validation={{ required: true }}
        />
        <FieldError name="email" />

        <label htmlFor="message" style={{ display: 'block' }}>
          Message
        </label>
        <TextAreaField
          name="message"
          style={{ display: 'block' }}
          validation={{ required: true }}
        />
        <FieldError name="message" style={{ color: 'red' }} />

        <Submit style={{ display: 'block' }}>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
