import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AvailabilityBadge } from './AvailabilityBadge';

describe("AvailabilityBadge", () => {
    it('should get de badgeName', () => {
        const badgeNameTest = 'itGotTheValue';
        render(<AvailabilityBadge badgeName={badgeNameTest} />)
        expect(screen.getByText(badgeNameTest))
    })
})