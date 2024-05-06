export const formatFieldName = (fieldName: string): string => {
    if (typeof fieldName !== 'string') return fieldName
  
    const words = fieldName
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
      .split(' ')
  
    const formattedName = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  
    return formattedName
  }
