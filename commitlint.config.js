export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore'],
        ],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
    },
};
