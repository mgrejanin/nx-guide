module.exports = {
    name: 'akita-login-feature',
    preset: '../../../../jest.config.js',
    coverageDirectory: '../../../../coverage/libs/akita/login/feature',
    snapshotSerializers: [
        'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js',
    ],
};
