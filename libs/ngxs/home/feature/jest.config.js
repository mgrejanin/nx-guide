module.exports = {
    name: 'ngxs-home-feature',
    preset: '../../../../jest.config.js',
    coverageDirectory: '../../../../coverage/libs/ngxs/home/feature',
    snapshotSerializers: [
        'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js',
    ],
};
