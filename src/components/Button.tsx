import { ThemeProvider } from "styled-components";
import { ButtonContainer, ButtonVariant } from "./Button.styles";

import { defaultTheme } from "../styles/default";

interface ButtonProps {
    variant?: ButtonVariant;
}

export function Button({ variant = 'primary' }: ButtonProps) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <ButtonContainer variant={variant}>
                Enviar
            </ButtonContainer>
        </ThemeProvider>
    );
}