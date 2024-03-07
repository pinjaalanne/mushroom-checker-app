import { useContext } from 'react';
import { ModelContext } from './ModelContext';

export const useModel = () => useContext(ModelContext);