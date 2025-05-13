import { ReactNode } from 'react';


export enum E_Link_Type
{
    Navigation,
    External
}

export const Properties =
    {
        type: {} as {
            children: ReactNode,
            to: string,
            type: E_Link_Type,
            hue?: string
        },

        get default(): typeof this.type
        {
            return (
                {
                    children: undefined,
                    to: '/',
                    type: E_Link_Type.Navigation,
                }
            );
        },
    };