import Lockr from 'lockr';

export let getStorage = (key) => {
    return Lockr.get(key);
};

export let setStorage = (key, value) => {
    return Lockr.set(key, value);
};
