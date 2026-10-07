import DefaultResume from '@/PdfPreviews/DefaultResume'
import Resumepreview from '@/components/Custom-components/ResumePreview components/Resumepreview'
import ProfessionalResume from '@/PdfPreviews/ProfessionalResume'
import ProfessionalPreview from '@/components/Custom-components/ResumePreview components/ProfessionalPreview'

export const TEMPLATES = {
  default: {
    id: 'default',
    name: 'Default',
    pdf: DefaultResume,
    preview: Resumepreview,
    thumbnail: null
  },
  professional: {
    id: 'professional',
    name: 'Professional',
    pdf: ProfessionalResume,
    preview: ProfessionalPreview,
    thumbnail: null
  }
}
