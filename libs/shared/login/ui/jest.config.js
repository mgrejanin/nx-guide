module.exports = {
  name: 'shared-login-ui',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/shared/login/ui',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
