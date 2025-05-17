export const Properties =
    {
        type: {} as
            {
                to: string,
                name: string,
                tags: string[]
                hue?: string
            },
        get default(): typeof this.type
        {
            return (
                {
                    to: '/',
                    name: '',
                    tags: [],
                }
            );
        },
    };