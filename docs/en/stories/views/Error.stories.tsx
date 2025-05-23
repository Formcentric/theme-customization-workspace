import React from 'react'
import { Meta } from '@storybook/react'
import Template from '../../../helpers/Template'
import variables from '../../../helpers/theme'
import { View, ViewProps, ViewStory } from '../Views'

const Error = (props: ViewProps) => {
    return (
        <Template
            template={window.formcentric.formapp.templates.error}
            props={props}
            variables={variables}
        />
    )
}

const meta: Meta<typeof Error> = {
    title: 'EN/Template Properties/Views/Error',
    component: Error,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Implementation of an `error` view template located in `templates/views/`. Formcentric client passes the listed properties as the second argument to the template function, enabling dynamic rendering of form views.',
            },
        },
    },
}

export default meta

export const Default: ViewStory = {
    ...View,
    name: 'Error',
}
