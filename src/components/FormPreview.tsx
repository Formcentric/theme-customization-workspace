import styled from 'styled-components'
import { useAnimate } from 'motion/react'
import { useEffect } from 'react'

interface FormPreviewP {
    selectedTheme: string
    selectedForm: string
    clientAttributes: Record<string, string>
}

const FormWrapper = styled.div`
    grid-column: 3/4;
    border-radius: 6px;
    position: relative;
    flex: 1;

    @media (max-width: 1024px) {
        grid-column: 1/4;
        margin: 2rem 2rem;
    }
`

const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
`

const Form = styled.div`
    position: relative;
    z-index: 2;
    max-width: 60rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 100vh;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const FormPreview = ({ selectedTheme, selectedForm, clientAttributes }: FormPreviewP) => {
    const [form, animateForm] = useAnimate()
    const [loader, animateLoader] = useAnimate()

    const handleAnimations = () => {
        animateLoader(loader.current, { rotate: [0, 360] }, { duration: 3 })

        animateLoader(loader.current, { opacity: 0 }, { delay: 1, duration: 0 })

        animateLoader(loader.current, { opacity: 1 }, { duration: 0 })

        animateForm(form.current, { y: [50, 0], opacity: [0, 1] }, { duration: 0.4, delay: 1 })
    }
    useEffect(() => {
        handleAnimations()
    }, [selectedForm, selectedTheme])

    return (
        <FormWrapper>
            <LoadingWrapper>
                <svg
                    ref={loader}
                    width={64}
                    height={64}
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <g
                        fill='none'
                        fillRule='evenodd'
                    >
                        <path
                            d='M10 17a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4.95-2.05a1.5 1.5 0 112.121 2.121 1.5 1.5 0 01-2.121-2.121zM18.5 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-17 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm1.429-5.571A1.5 1.5 0 115.05 5.05 1.5 1.5 0 012.93 2.93zm12.02 0a1.5 1.5 0 112.122 2.121A1.5 1.5 0 0114.95 2.93zM10 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z'
                            fill='#473F7D'
                        />
                    </g>
                </svg>
            </LoadingWrapper>
            <Form>
                <div
                    ref={form}
                    style={{
                        background: '#fff',
                        boxShadow: '0 20px 60px rgba(10, 0, 82, 0.2)',
                        borderRadius: 6,
                        overflow: 'hidden',
                        height: '90vh',
                        width: '100%',
                        maxWidth: '60rem',
                    }}
                >
                    <div
                        style={{
                            overflow: 'hidden',
                            height: '90vh',
                        }}
                        {...clientAttributes}
                    />
                </div>
            </Form>
        </FormWrapper>
    )
}
