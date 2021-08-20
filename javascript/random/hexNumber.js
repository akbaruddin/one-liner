const hexNumber = () => `#${Math.random().toString(16).slice(2,9).padEnd(6,'0')}`;

const result = hexNumber(); // #c3fd5db
