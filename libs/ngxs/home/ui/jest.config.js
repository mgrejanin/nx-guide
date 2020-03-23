module.exports = {
    name: 'ngxs-home-ui',
    preset: '../../../../jest.config.js',
    coverageDirectory: '../../../../coverage/libs/ngxs/home/ui',
    snapshotSerializers: [
        'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js',
    ],
};
