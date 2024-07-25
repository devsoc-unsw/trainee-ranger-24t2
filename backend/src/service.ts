import { AccessError, InputError } from './error';

// some dummy route function or something
const dummyFunc = async(input: string) => {
    if (input === '') {
        throw new InputError('input cannot be empty');
    }
}

export { dummyFunc }