import is from './is';

if (!Object.is) {
  Object.is = is;
}
