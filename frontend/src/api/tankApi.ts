import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const movementUrl = new Map<string, string>([
    ["stop", "move/stop"],
    ["fire", "fire"],
    ["forward", "move/forward"],
    ["backward", "move/backward"],
    ["front-left", "move/frontleft"],
    ["front-right", "move/frontright"],
    ["back-left", "move/backleft"],
    ["back-right", "move/backright"],
    ["spin-left", "spin/left"],
    ["spin-right", "spin/right"],
]);

const getMovementUrl = (direction: string) => {
    let url = movementUrl.get(direction)
    return url? url: 'move/stop'
}

export const tankApi = createApi({
    reducerPath: 'tankApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: (builder) => ({
        actionFire: builder.mutation({
            query: () => ({
                url: `fire`,
                method: 'POST',
                body: {},
            }),
        }),

        actionStop: builder.mutation({
            query: () => ({
                url: `move/stop`,
                method: 'POST',
                body: {},
            }),
        }),

        actionMove: builder.mutation({
            query: (direction) => ({
                url: getMovementUrl(direction),
                method: 'POST',
                body: {},
            }),
        }),
    }),
});

export const { useActionFireMutation, useActionStopMutation, useActionMoveMutation } = tankApi;