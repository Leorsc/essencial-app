import { useState } from "react"


function useUserProvider() {
  const brasil = 'Brasil bora'

  return {
    brasil,
    useState
  }
}

export default useUserProvider;
