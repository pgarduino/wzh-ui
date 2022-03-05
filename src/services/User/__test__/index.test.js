import axios from 'axios'
require('babel-register')({ presets: ['es2015', 'stage-0'] });
require('babel-polyfill');

jest.mock('axios');

import UserService from './../'

describe('UserService', () => {
    it("getAll() -> /api/users", async () => {
        axios.get.mockResolvedValue({
            data: [],
        });
        const users = await UserService.getAll().then(res =>  res)
        expect(users).toEqual([])
    })

})