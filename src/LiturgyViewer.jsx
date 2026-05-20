import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'

export default function LiturgyViewer() {
  const [numPages, setNumPages] = useState(null)
  const [containerWidth, setContainerWidth] = useState(null)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  function onContainerRef(el) {
    if (el) setContainerWidth(el.clientWidth)
  }

  return (
    <div className="liturgy-pdf-container" ref={onContainerRef}>
      <Document
        file="/liturgia.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<p className="pdf-loading">Betöltés…</p>}
        error={<p className="pdf-loading">Nem sikerült betölteni a PDF-et.</p>}
      >
        {Array.from({ length: numPages || 0 }, (_, i) => (
          <Page
            key={i + 1}
            pageNumber={i + 1}
            width={containerWidth || 700}
            className="pdf-page"
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        ))}
      </Document>
    </div>
  )
}
