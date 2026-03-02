'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../utils/supabaseClient'
import styles from './dashboard.module.css'

interface Product {
  id: string
  name: string
  description: string
  price: string
  category: string
  categoryName: string
  slug: string
  specs: string
  notes: string
  created_at: string
  imageUrl?: string
}

export default function AdminProducts() {
  const router = useRouter()

  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
const [formData, setFormData] = useState({
  name: '',
  description: '',
  price: '',
  category: '',
  categoryName: '',
  notes: ''
})
const [specs, setSpecs] = useState<{ key: string; value: string }[]>([
  { key: '', value: '' }
])
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [uploadingImage, setUploadingImage] = useState(false)
  const [categories, setCategories] = useState<{id: string, name: string}[]>([])
  const [search, setSearch] = useState('')

  // Authentication state
  const [user, setUser] = useState<any>(null)
  const [authLoading, setAuthLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) {
        router.replace('/admin/login')
      } else {
        setUser(session.user)
      }
      setAuthLoading(false)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session?.user) {
        router.replace('/admin/login')
      } else {
        setUser(session.user)
      }
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [router])

  // Generate slug from name
  const generateSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-')

  // Fetch products
  useEffect(() => {
    if (!user) return

    async function fetchProducts() {
      setLoading(true)
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) console.error(error)
      else {
        const productsWithImages = data.map((p: Product) => ({
          ...p,
          imageUrl: `https://xxnkqekirvdjruvpwjjq.supabase.co/storage/v1/object/public/product_images/${p.slug}.jpg`
        }))
        setProducts(productsWithImages)
      }
      setLoading(false)
    }

    fetchProducts()
  }, [user])

  // Fetch categories
  useEffect(() => {
    if (!user) return

    async function fetchCategories() {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name', { ascending: true })
      if (error) console.error(error)
      else setCategories(data)
    }

    fetchCategories()
  }, [user])

  if (authLoading) return <p>Checking authentication...</p>
  if (!user) return null 

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.categoryName.toLowerCase().includes(search.toLowerCase())
  )


function openModal(product?: Product) {
  if (product) {
    setEditingProduct(product)

    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      categoryName: product.categoryName,
      notes: product.notes
    })

    if (product.specs) {
      const specsObj =
        typeof product.specs === 'string'
          ? JSON.parse(product.specs)
          : product.specs

      const specArray = Object.entries(specsObj).map(([key, value]) => ({
        key,
        value: String(value)
      }))

      setSpecs(specArray.length ? specArray : [{ key: '', value: '' }])
    } else {
      setSpecs([{ key: '', value: '' }])
    }

  } else {
    setEditingProduct(null)
    setFormData({
      name: '',
      description: '',
      price: '',
      category: '',
      categoryName: '',
      notes: ''
    })
    setSpecs([{ key: '', value: '' }])
    setImageFile(null)
  }

  setModalOpen(true)
}

  // Handle form changes
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    if (name === 'category') {
      const selectedCategory = categories.find(c => c.id === value)
      setFormData(prev => ({
        ...prev,
        category: value,
        categoryName: selectedCategory ? selectedCategory.name : ''
      }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
    
  }
function handleSpecChange(
        index: number,
        field: 'key' | 'value',
        value: string
      ) {
        const updated = [...specs]
        updated[index][field] = value
        setSpecs(updated)
      }

      function addSpecField() {
        setSpecs([...specs, { key: '', value: '' }])
      }

      function removeSpecField(index: number) {
        const updated = specs.filter((_, i) => i !== index)
        setSpecs(updated.length ? updated : [{ key: '', value: '' }])
      }
  // Handle submit (add/update)
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setUploadingImage(true)
    const formattedSpecs = specs.reduce((acc: any, spec) => {
        if (spec.key.trim() !== '') {
          acc[spec.key.trim()] = spec.value
        }
        return acc
      }, {})
    try {
      const slug = generateSlug(formData.name)
      let productId = editingProduct?.id

      if (editingProduct) {
        const { error } = await supabase
          .from('products')
          .update({
            name: formData.name,
            description: formData.description,
            price: Number(formData.price),
            category: formData.category,
            categoryName: formData.categoryName,
            slug,
            specs: formattedSpecs,
            notes: formData.notes
          })
          .eq('id', editingProduct.id)
        if (error) throw error
      } else {
        const { data, error } = await supabase
          .from('products')
          .insert([{
            name: formData.name,
            description: formData.description,
            price: Number(formData.price),
            category: formData.category,
            categoryName: formData.categoryName,
            slug,
            specs: formattedSpecs,
            notes: formData.notes
          }])
          .select('id')
        if (error) throw error
        productId = data[0].id
      }

      if (imageFile) {
        const formDataImage = new FormData()
        formDataImage.append('slug', slug)
        formDataImage.append('file', imageFile)
        const res = await fetch('/api/upload', { method: 'POST', body: formDataImage })
        const contentType = res.headers.get('content-type') || ''
        let data
        if (contentType.includes('application/json')) data = await res.json()
        else throw new Error(`Unexpected response: ${await res.text()}`)
        if (!res.ok) throw new Error(data.error || 'Image upload failed')
      }

      // Refresh products
      const { data } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false })
      if (data) {
        const productsWithImages = data.map((p: Product) => ({
          ...p,
          imageUrl: `https://xxnkqekirvdjruvpwjjq.supabase.co/storage/v1/object/public/product_images/${p.slug}.jpg`
        }))
        setProducts(productsWithImages)
      }
      setModalOpen(false)
      setImageFile(null)
    } catch (err: any) {
      console.error('Insert/Update failed:', err)
      alert('Insert/Update failed: ' + err.message)
    } finally {
      setUploadingImage(false)
    }
  }

  // Delete product
  async function handleDelete(product: Product) {
    if (!confirm(`Are you sure you want to delete ${product.name}?`)) return
    try {
      const { error } = await supabase.from('products').delete().eq('id', product.id)
      if (error) throw error
      setProducts(prev => prev.filter(p => p.id !== product.id))
    } catch (err: any) {
      alert('Delete failed: ' + err.message)
    }
  }

  // JSX
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Waka NG Admin Products</h1>
      <button className={styles.addButton} onClick={() => openModal()}>Add Product</button>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className= {styles.search}
        />
      </div>

      {loading ? <p>Loading...</p> : (
        <div className= {styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map(p => (
                <tr key={p.id}>
                  <td>{p.imageUrl ? <img src={p.imageUrl} alt={p.name} className={styles.productImage} /> : 'No image'}</td>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  <td>{p.categoryName}</td>
                  <td className={styles.actions}>
                    <button onClick={() => openModal(p)}>Edit</button>
                    <button onClick={() => handleDelete(p)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {modalOpen && (
        <div className={styles.modalOverlay}>
          <form onSubmit={handleSubmit} className={styles.modalContent}>
            <h2>{editingProduct ? 'Edit Product' : 'Add Product'}</h2>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
            <input type="text" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
            <select name="category" value={formData.category} onChange={handleChange} required>
              <option value="">Select category</option>
              {categories.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
              <div className={styles.specsContainer}>
                <label>Specifications</label>

                {specs.map((spec, index) => (
                  <div key={index} className={styles.specRow}>
                    <input
                      type="text"
                      placeholder="Spec Name (e.g. condition)"
                      value={spec.key}
                      onChange={(e) =>
                        handleSpecChange(index, 'key', e.target.value)
                      }
                      required
                    />

                    <input
                      type="text"
                      placeholder="Spec Value (e.g. new)"
                      value={spec.value}
                      onChange={(e) =>
                        handleSpecChange(index, 'value', e.target.value)
                      }
                      required
                    />

                    <button
                      type="button"
                      onClick={() => removeSpecField(index)}
                      className={styles.removeSpecButton}
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addSpecField}
                  className={styles.addSpecButton}
                >
                  + Add Spec
                </button>
              </div>
            <textarea name="notes" placeholder="Notes" value={formData.notes} onChange={handleChange} />
            <input type="file" accept=".jpg" onChange={e => e.target.files && setImageFile(e.target.files[0])} />
            <div className={styles.modalButtons}>
              <button type="submit">{uploadingImage ? 'Uploading...' : (editingProduct ? 'Update' : 'Add')}</button>
              <button type="button" onClick={() => setModalOpen(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}