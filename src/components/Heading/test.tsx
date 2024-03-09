import { render, screen } from "@testing-library/react";
import { Heading } from ".";

describe('<Heading />', () => {
    it('should render a heading', () => {
        render(<Heading>Oi</Heading>);
    })
})