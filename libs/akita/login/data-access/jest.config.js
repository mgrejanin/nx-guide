module.exports = {
  name: 'akita-login-data-access',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/akita/login/data-access',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
