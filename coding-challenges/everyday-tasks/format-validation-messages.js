// Format backend validation message to frontend format

const backendErrors = {
    email: {
      errors: [
        {
          message: "Can't be blank",
        },
      ],
    },
    password: {
      errors: [
        {
          message: "Must contain symbols in different case",
        },
        {
          message: "Must be at least 8 symbols length",
        },
      ],
    },
    passwordConfirmation: {
      errors: [
        {
          message: "Must match with password",
        },
      ],
    },
  };
  
  
/**
 * Expected output
 * ["Email: Can't be blank", "Password: Must contain symbols, Must be at least 8 symbols", "passwordConfirmation: Must match with password"]
 */


const humanReadableBackendErrors = Object.entries(backendErrors).map(([key, value]) => {
    const fieldMessage = value.errors.map((error) => error.join(' '))
    const capitalized = key.charAt(0).toUpperCase()+key.slice(1)
    return `${capitalized}: ${fieldMessage}`
})