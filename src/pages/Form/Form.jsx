'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, CheckCircle2, Upload, X } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    address: '',
    state: '',
    district: '',
    pincode: '',
    aadharNumber: '',
    tenthMarksheet: null,
    twelfthMarksheet: null,
    diplomaCertificate: null,
    domicileCertificate: null,
    aadharCard: null,
    incomeCertificate: null,
    casteCertificate: null,
    disabilityCertificate: null,
    category: '',
    hasDisability: false,
  })

  const [errors, setErrors] = useState({})
  const [activeTab, setActiveTab] = useState('personal')
  const [progress, setProgress] = useState(0)
  const [filePreviews, setFilePreviews] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    validateField(name, value)
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    if (files && files.length > 0) {
      const file = files[0]
      setFormData(prev => ({ ...prev, [name]: file }))
      validateField(name, file)
      
      // Create file preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setFilePreviews(prev => ({ ...prev, [name]: reader.result }))
      }
      if (file.type.startsWith('image/')) {
        reader.readAsDataURL(file)
      } else {
        setFilePreviews(prev => ({ ...prev, [name]: 'non-image' }))
      }
    }
  }

  const handleRemoveFile = (name) => {
    setFormData(prev => ({ ...prev, [name]: null }))
    setFilePreviews(prev => {
      const newPreviews = { ...prev }
      delete newPreviews[name]
      return newPreviews
    })
  }

  const handleSelectChange = (name) => (value) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    validateField(name, value)
  }

  const handleCheckboxChange = (checked) => {
    setFormData(prev => ({ ...prev, hasDisability: checked }))
  }

  const validateField = (name, value) => {
    let newErrors = { ...errors }
    switch (name) {
      case 'name':
        if (!value) newErrors[name] = 'Name is required'
        else delete newErrors[name]
        break
      case 'aadharNumber':
        if (value && !/^\d{12}$/.test(value)) newErrors[name] = 'Aadhaar number must be 12 digits'
        else delete newErrors[name]
        break
      // Add more validation cases as needed
    }
    setErrors(newErrors)
  }

  useEffect(() => {
    updateProgress()
  }, [formData])

  const updateProgress = () => {
    const totalFields = Object.keys(formData).length
    const filledFields = Object.values(formData).filter(value => value !== '' && value !== null).length
    setProgress((filledFields / totalFields) * 100)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (Object.keys(errors).length === 0) {
      console.log(formData)
      // Here you would typically send the data to your backend
    } else {
      alert('Please correct the errors before submitting')
    }
  }

  const renderFileInput = (name, label, required = true) => (
    <div className="space-y-2 border  rounded-xl p-2 border-customAccent/50">
      <Label htmlFor={name}>{label}</Label>
      <div className="flex items-center space-x-2">
        <Input id={name} name={name} type="file" className="hidden" onChange={handleFileChange} required={required} />
        <Button type="button" variant="outline" onClick={() => document.getElementById(name)?.click()}>
          <Upload className="w-4 h-4 mr-2" />
          Choose File
        </Button>
        <span className="text-sm text-gray-500">
          {formData[name] ? formData[name].name : 'No file chosen'}
        </span>
      </div>
      {filePreviews[name] && (
        <div className="mt-2 relative">
          {filePreviews[name] === 'non-image' ? (
            <div className="p-4 bg-gray-100 rounded">
              <CheckCircle2 className="w-6 h-6 text-green-500 mb-2" />
              <p className="text-sm">File uploaded successfully</p>
            </div>
          ) : (
            <img src={filePreviews[name]} alt="Preview" className="max-w-full h-auto rounded" />
          )}
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2"
            onClick={() => handleRemoveFile(name)}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  )

  return (
    <div className="max-w-4xl mt-20 mx-auto p-6 bg-white rounded-lg shadow-md mb-32">
      <h1 className="text-3xl font-bold text-center mb-6 text-primary">Student Document Submission Form</h1>
      <Alert className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important</AlertTitle>
        <AlertDescription>
          Please ensure all documents are clear, legible, and in PDF or image format. Maximum file size: 5MB per document.
        </AlertDescription>
      </Alert>
      <Progress value={progress} className="mb-6 "  />
      <form onSubmit={handleSubmit} className="space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="address">Address</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="additional">Additional</TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Please provide your personal details accurately</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" name="dob" type="date" value={formData.dob} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select name="gender" onValueChange={handleSelectChange('gender')}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="aadharNumber">Aadhaar Number</Label>
                  <Input id="aadharNumber" name="aadharNumber" value={formData.aadharNumber} onChange={handleInputChange} />
                  {errors.aadharNumber && <p className="text-red-500 text-sm">{errors.aadharNumber}</p>}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="address">
            <Card>
              <CardHeader>
                <CardTitle>Address Information</CardTitle>
                <CardDescription>Please provide your current residential address</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" name="address" value={formData.address} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" name="state" value={formData.state} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="district">District</Label>
                  <Input id="district" name="district" value={formData.district} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pincode">Pincode</Label>
                  <Input id="pincode" name="pincode" value={formData.pincode} onChange={handleInputChange} required />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Document Submission</CardTitle>
                <CardDescription>Please upload the required documents in PDF or image format</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {renderFileInput('tenthMarksheet', '10th Standard Mark Sheet')}
                {renderFileInput('twelfthMarksheet', '12th Standard Mark Sheet')}
                {renderFileInput('diplomaCertificate', 'Diploma Certificate (for lateral entry only)', false)}
                {renderFileInput('domicileCertificate', 'Domicile Certificate')}
                {renderFileInput('aadharCard', 'Aadhaar Card (if any)', false)}
                {renderFileInput('incomeCertificate', 'Family Income Certificate')}
                {renderFileInput('casteCertificate', 'Valid Caste Certificate (for SC/ST/SEBC)', false)}
                {renderFileInput('disabilityCertificate', 'Valid Disability Certificate (if any)', false)}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="additional">
            <Card>
              <CardHeader>
                <CardTitle>Additional Information</CardTitle>
                <CardDescription>Please provide any additional required information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select name="category" onValueChange={handleSelectChange('category')}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="sc">SC</SelectItem>
                      <SelectItem value="st">ST</SelectItem>
                      <SelectItem value="sebc">SEBC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="hasDisability" checked={formData.hasDisability} onCheckedChange={handleCheckboxChange} />
                  <Label htmlFor="hasDisability">I have a disability</Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        <div className="flex justify-between">
          <Button type="button" className="border border-customAccent text-customAccent hover:text-customAccent" variant="outline" onClick={() => setActiveTab(prev => {
            const tabs = ['personal', 'address', 'documents', 'additional']
            const currentIndex = tabs.indexOf(prev)
            return tabs[Math.max(0, currentIndex - 1)]
          })}>
            Previous
          </Button>
          <Button type="button" className="bg-customAccent hover:bg-customAccent rounded-xl" onClick={() => {
            const tabs = ['personal', 'address', 'documents', 'additional']
            const currentIndex = tabs.indexOf(activeTab)
            if (currentIndex === tabs.length - 1) {
              handleSubmit(new Event('submit'))
            } else {
              setActiveTab(tabs[currentIndex + 1])
            }
          }}>
            {activeTab === 'additional' ? 'Submit' : 'Next'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Form