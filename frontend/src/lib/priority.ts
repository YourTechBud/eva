export const calculatePriorityColor = (priority: number) => {
  switch (priority) {
    case 1:
      return 'red';
    case 2:
      return 'orange';
    case 3:
      return 'amber';
    case 4:
      return 'blue';
    default:
      return 'zinc';
  }
};
