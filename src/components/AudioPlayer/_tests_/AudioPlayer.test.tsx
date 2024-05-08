import React from 'react';
import { render, screen } from '@testing-library/react';

import { AudioPlayer } from '../AudioPlayer';

test('renders an audio player', () => {
    render(<AudioPlayer/>);

    const audioPlayerComponent = screen.getByRole('generic');
    expect(audioPlayerComponent).toBeInTheDocument()
})