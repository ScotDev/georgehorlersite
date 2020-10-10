import React, { useState } from 'react';
import getConfig from 'next/config';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import {
    Text, Box, Button, FormControl,
    FormLabel, Input, Textarea
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
    const { publicRuntimeConfig } = getConfig();
    const FORM_ENDPOINT = publicRuntimeConfig.FORM_ENDPOINT;

    const [afterSubmitMsg, setafterSubmitMsg] = useState(null)
    const [submitError, setSubmitError] = useState(null)

    return (
        <Box width={["90%", "75%", "45%", "35%"]} py={6} px={4} my={10} backgroundColor="gray.50" borderWidth="2px" borderColor="gray.300" rounded="lg" display="flex" flexDirection="column" alignItems="center" justifyContent="center" id="contact">

            <Text fontSize="4xl" color="teal.400" mb={12}>Contact me</Text>

            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validationSchema={contactSchema}

                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true)

                    let formData = new FormData()
                    formData.append("name", values.name)
                    formData.append("email", values.email)
                    formData.append("message", values.message)

                    try {


                        fetch(`${FORM_ENDPOINT}`, {
                            method: 'post',
                            body: formData
                        }).then(res => {
                            console.log(res)

                            // Submission time is too brief on a standard broadband connection to reliably see loading animation,
                            // added timeout for consistency
                            setTimeout(() => {
                                setSubmitting(false)
                                setafterSubmitMsg("Thank you! I'll be in touch soon")
                            }, 1000)

                            setSubmitError(false)

                            console.log("Data sent successfully")
                        }).catch(err => {
                            console.log(err)
                            setSubmitting(false)
                            setSubmitError(true)
                            setafterSubmitMsg('Message could not be sent, please try again')
                        })
                    } catch (err) {
                        console.log(err)
                        setSubmitting(false)
                        setafterSubmitMsg('Message could not be sent, please try again')
                        setSubmitError(true)
                    }

                }}
            >
                {({ values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting, }) => (
                        <Form onSubmit={handleSubmit} style={{ width: "95%" }}>

                            <FormControl >
                                <FormLabel htmlFor="name" mx={2}>Name*</FormLabel>
                                <Input m={2}
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                <Text mx={2} mb={8} color="red.500">
                                    {errors.name && touched.name && errors.name}
                                </Text>

                            </FormControl>

                            <FormControl >
                                <FormLabel htmlFor="email" mx={2}>Email address*</FormLabel>
                                <Input m={2}
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <Text mx={2} mb={8} color="red.500">
                                    {errors.email && touched.email && errors.email}
                                </Text>

                            </FormControl>

                            <FormControl >
                                <FormLabel htmlFor="message" mx={2}>Message*</FormLabel>
                                <Textarea m={2}
                                    type="text"
                                    name="message"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.message}
                                    resize={"vertical"}
                                    minHeight="150px"
                                />
                                <Text mx={2} mb={8} color="red.500">
                                    {errors.message && touched.message && errors.message}
                                </Text>

                            </FormControl>

                            <Button m={2} type="submit" isLoading={isSubmitting} backgroundColor="teal.400" color="gray.50" loadingText="Submitting">Submit</Button>

                            <Text mx={2} mt={4} mb={8} color={submitError ? "red.500" : "teal.400"}>
                                {afterSubmitMsg}
                            </Text>
                        </Form>
                    )}
            </Formik>




        </Box>
    )
}
