import {render, screen} from '@testing-library/react';
import { create } from "react-test-renderer";
import Footer from './Footer';

describe("Footer component", () => {
    test('renders learn react link', () => {
        render(<Footer/>);
        expect(screen.getByText('Thinknetica React Application')).toBeInTheDocument()
    });

    test("Matches the snapshot", () => {
        const header = create(<Footer/>);
        expect(header.toJSON()).toMatchSnapshot();
    });
});
