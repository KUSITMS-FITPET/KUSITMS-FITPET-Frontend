import { useCallback, useState } from 'react'
import { usePostQuotation } from '../api'

export default function useQuote() {
  const { mutate } = usePostQuotation()
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [breed, setBreed] = useState('')
  const [agreement, setAgreement] = useState(false)
  const [ageError, setAgeError] = useState('')
  const [nameError, setNameError] = useState('')
  const [notes, setNotes] = useState('')
  const [phone2, setPhone2] = useState('')
  const [phone3, setPhone3] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = useCallback(() => {
    if (ageError || nameError || phoneError) {
      alert('에러')
      console.log(ageError, nameError)
    }
    mutate(
      {
        petName: name,
        petInfo: notes,
        petSpecies: petType,
        petAge: parseInt(age, 10),
        phoneNumber: `010${phone2}${phone3}`,
        moreInfo: 's',
        agreement: true,
      },
      {
        onSuccess: () => {
          setShowModal(true)
        },
        onError: () => {
          alert('잠시 후 다시 시도해주세요.')
        },
      },
    )
  }, [])

  return {
    showModal,
    petType,
    name,
    age,
    breed,
    agreement,
    ageError,
    nameError,
    notes,
    phone2,
    phoneError,
    setPhoneError,
    setPhone2,
    setShowModal,
    phone3,
    setPhone3,
    setNotes,
    setNameError,
    setAgeError,
    handleSubmit,
    setAgreement,
    setAge,
    setBreed,
    setName,
    setPetType,
  }
}
