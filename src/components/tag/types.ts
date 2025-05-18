export const Properties =
    {
        type: {} as
            {
                content: string,
            },
        get default(): typeof this.type
        {
            return (
                {
                    content: '',
                }
            );
        },
    };