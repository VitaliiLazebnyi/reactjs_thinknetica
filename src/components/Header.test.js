import { render, screen } from '@testing-library/react';
import { create } from "react-test-renderer";
import Header from './Header';

describe("Header component", () => {
    test('Renders logo text', () => {
        render(<Header />);
        expect(screen.getByText('Logo')).toBeInTheDocument()
    });

    test('Matches the snapshot', () => {
        const header = create(<Header />);
        expect(header.toJSON()).toMatchSnapshot();
    });
});
