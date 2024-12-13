import EnvironmentKey from './EnvironmentConst.module'

const EnvKey = EnvironmentKey();

export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${EnvKey}`,
    },
};


export const optionPost = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
        Authorization: `Bearer ${EnvKey}`
    }
  };