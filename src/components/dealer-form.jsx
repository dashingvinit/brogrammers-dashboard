import { useState } from 'react';
import { axios } from '../utils';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Loader2 } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

export default function DealerForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    ref_no: '',
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [validation, setValidation] = useState({});

  const validateForm = () => {
    const errors = {};

    // Basic validation
    if (!formData.ref_no.trim()) errors.ref_no = 'Referral number is required';
    if (!formData.name.trim()) errors.name = 'Name is required';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Phone validation (optional field but validate format if entered)
    if (formData.phone.trim()) {
      const phoneRegex = /^\+?[0-9]{10,15}$/;
      if (!phoneRegex.test(formData.phone)) {
        errors.phone = 'Please enter a valid phone number';
      }
    }

    setValidation(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear specific field error when typing
    if (validation[name]) {
      setValidation((prev) => ({ ...prev, [name]: null }));
    }

    // Clear general errors/success when form changes
    if (error) setError(null);
    if (success) setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await axios.post('/dealer/createSubDealer', formData);
      setSuccess(true);
      setFormData({
        ref_no: '',
        name: '',
        email: '',
        phone: '',
        address: '',
      });
    } catch (error) {
      const errorMessage = error.data?.data?.message || error.message || 'Failed to create dealer';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold text-center">Create Sub-Dealer</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        {success && (
          <Alert variant="">
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>Sub-dealer has been created successfully.</AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error?.message}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="ref_no" className="font-medium">
              Referral Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="ref_no"
              name="ref_no"
              value={formData.ref_no}
              onChange={handleChange}
              placeholder="Enter referral number"
              className={validation.ref_no ? 'border-red-500' : ''}
            />
            {validation.ref_no && <p className="text-red-500 text-sm mt-1">{validation.ref_no}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="name" className="font-medium">
              Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter dealer name"
              className={validation.name ? 'border-red-500' : ''}
            />
            {validation.name && <p className="text-red-500 text-sm mt-1">{validation.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-medium">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className={validation.email ? 'border-red-500' : ''}
            />
            {validation.email && <p className="text-red-500 text-sm mt-1">{validation.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="font-medium">
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className={validation.phone ? 'border-red-500' : ''}
            />
            {validation.phone && <p className="text-red-500 text-sm mt-1">{validation.phone}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="font-medium">
              Address
            </Label>
            <Textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter full address"
              rows={3}
              className={validation.address ? 'border-red-500' : ''}
            />
            {validation.address && (
              <p className="text-red-500 text-sm mt-1">{validation.address}</p>
            )}
          </div>

          <Button type="submit" className="w-full mt-6" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating...
              </>
            ) : (
              'Create Dealer'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
