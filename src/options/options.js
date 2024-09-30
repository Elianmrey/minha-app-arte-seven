import EnvironmentKey from './EnvironmentConst.module'

const EnvKey = EnvironmentKey();

export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${EnvKey}`,
    },
};
