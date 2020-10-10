import React from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import {
    Text, Box, Button, FormControl,
    FormLabel,
    FormHelperText, Input, Textarea
} from '@chakra-ui/core';


const contactSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string()
        .min(2, 'Too Short!')
        .max(500, 'Too Long!')
        .required('Required'),
});

export default function Contact() {


    return (
        <Box width="45%" p={2} m={6} borderWidth="2px" borderColor="grey.100" borderRadius="lg" display="flex" flexDirection="column" alignItems="center" justifyContent="center">

            <Formik
                initialValues={{ email: '' }}
                // validate={values => {
                //     const errors = {};
                //     if (!values.email) {
                //         errors.email = 'Required';
                //     } else if (
                //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                //     ) {
                //         errors.email = 'Invalid email address';
                //     }
                //     return errors;
                // }  }
                validationSchema={contactSchema}

                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true)

                    console.log(values)
                }}
            >
                {({ values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting, }) => (
                        <Form onSubmit={handleSubmit} style={{ width: "90%" }}>

                            <FormControl >
                                <FormLabel htmlFor="name" mx={2}>Name</FormLabel>
                                <Input m={2}
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                <Text my={2} mx={4} color="red.500">
                                    {errors.name && touched.name && errors.name}
                                </Text>

                            </FormControl>

                            <FormControl >
                                <FormLabel htmlFor="email" mx={2}>Email address</FormLabel>
                                <Input m={2}
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <Text my={2} mx={4} color="red.500">
                                    {errors.email && touched.email && errors.email}
                                </Text>

                            </FormControl>

                            <FormControl >
                                <FormLabel htmlFor="message" mx={2}>Message</FormLabel>
                                <Textarea m={2}
                                    type="text"
                                    name="message"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.message}
                                />
                                <Text my={2} mx={4} color="red.500">
                                    {errors.message && touched.message && errors.message}
                                </Text>

                            </FormControl>

                            <Button m={2} type="submit" isLoading={isSubmitting} backgroundColor="teal.400" color="gray.50">Submit</Button>
                        </Form>
                    )}
            </Formik>




        </Box>
    )
}
