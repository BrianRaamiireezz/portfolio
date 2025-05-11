import { Properties as LinkProperties } from '../link/types.ts';


export const Properties =
    {

        type: {} as
            {
                items: Pick<typeof LinkProperties.type, 'to' | 'hue' | 'children'>[]
            },
        get default(): typeof this.type
        {
            return (
                {
                    items: [],
                }
            );
        },
    };