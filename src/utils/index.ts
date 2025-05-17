import { CSSProperties } from 'react';


export function get_gradient_hue(
    hue: string | undefined,
): CSSProperties
{
    return (
        hue
        ?
        {
            '--color-gradient-accent-hue': hue ?? '0',
            '--color-gradient-accent-saturation': '89%',
        } as CSSProperties
        : {}
    );
}