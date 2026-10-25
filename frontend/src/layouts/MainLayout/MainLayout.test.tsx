import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';

import { MainLayout } from './MainLayout';

describe('MainLayout', () => {
  it('renders header, footer and the nested route', () => {
    const router = createMemoryRouter([
      {
        path: '/',
        element: <MainLayout />,
        children: [{ index: true, element: <p>page content</p> }],
      },
    ]);

    render(<RouterProvider router={router} />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByText('page content')).toBeInTheDocument();
  });
});
