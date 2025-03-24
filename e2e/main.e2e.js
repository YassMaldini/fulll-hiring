describe('Search basic flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should display search bar', async () => {
    await expect(element(by.id('searchInput'))).toBeVisible();
  });

  it('should display placeholder text while nothing has been searched', async () => {
    await expect(element(by.text('Search Github users'))).toBeVisible();
    await expect(element(by.id('userCard'))).not.toBeVisible();
  });

  it('should search and display results', async () => {
    await expect(element(by.id('searchInput'))).toBeVisible();
    await element(by.id('searchInput')).typeText('test');
    await expect(element(by.id('userCard')).atIndex(0)).toBeVisible();
  });

  it('should hide copy and remove button when no card is checked', async () => {
    await expect(element(by.id('copyAction'))).not.toBeVisible();
    await expect(element(by.id('removeAction'))).not.toBeVisible();
  });

  it('should handle checkboxes correctly', async () => {
    await expect(element(by.id('searchInput'))).toBeVisible();
    await expect(element(by.id('selectAllCheckbox'))).toBeVisible();
    await expect(element(by.id('toggleEditMode'))).toHaveLabel('Disable edit mode');
    await element(by.id('selectAllCheckbox')).tap();
    await expect(element(by.id('selectedElementsCount'))).toHaveText('10 elements selected');
  });

  it('should display copy and remove button when at least one card is checked', async () => {
    await expect(element(by.id('copyAction'))).toBeVisible();
    await expect(element(by.id('removeAction'))).toBeVisible();
  });

  it('should change text of edit mode button when toggled', async () => {
    await expect(element(by.id('toggleEditMode'))).toHaveLabel('Disable edit mode');
    await element(by.id('toggleEditMode')).tap();
    await expect(element(by.id('toggleEditMode'))).toHaveLabel('Enable edit mode');
  });

  it('should hide all checkboxes when edit mode is disabled', async () => {
    await expect(element(by.id('selectAllCheckbox'))).not.toBeVisible();
    await expect(element(by.id('selectedElementsCount'))).not.toBeVisible();
    await expect(element(by.id('copyAction'))).not.toBeVisible();
    await expect(element(by.id('removeAction'))).not.toBeVisible();
    await expect(element(by.id('userCardCheckbox')).atIndex(0)).not.toBeVisible();
  });
});
