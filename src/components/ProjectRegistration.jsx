import React, { useState } from 'react';

const ProjectRegistration = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    contact_first_name: '',
    contact_last_name: '',
    contact_email: '',
    project_category: '',
    project_title: '',
    target_audience: '',
    source_materials: '',
    submission_date: '',
    project_goal: '',
    visual_references: '',
    deliverables: '',
    desired_deadline: '',
    terms_confirm: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="project-registration">
      <div className="form-container">
        <h2>Submit Your Creative Brief</h2>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Your Contact Information</legend>
            <label htmlFor="company_name">Company / Client Name*</label>
            <input type="text" id="company_name" name="company_name" value={formData.company_name} onChange={handleChange} required />
            <label>Primary Contact Name</label>
            <div className="name-group">
              <input type="text" id="contact_first_name" name="contact_first_name" placeholder="First Name" value={formData.contact_first_name} onChange={handleChange} required />
              <input type="text" id="contact_last_name" name="contact_last_name" placeholder="Last Name" value={formData.contact_last_name} onChange={handleChange} required />
            </div>
            <label htmlFor="contact_email">Email Address for Communication*</label>
            <input type="email" id="contact_email" name="contact_email" placeholder="project@yourcompany.com" value={formData.contact_email} onChange={handleChange} required />
          </fieldset>

          <fieldset>
            <legend>Project Scope & Requirements</legend>
            <label htmlFor="project_category">Project Category*</label>
            <select id="project_category" name="project_category" value={formData.project_category} onChange={handleChange} required>
              <option value="">Select Category...</option>
              <option value="video_editing">Video / Film Editing</option>
              <option value="graphic_design">Graphic Design / Branding</option>
              <option value="motion_graphics">Motion Graphics / Animation</option>
              <option value="custom_service">Custom Creative Service</option>
            </select>
            <label htmlFor="project_title">Project Working Title (e.g., "Summer Product Launch")</label>
            <input type="text" id="project_title" name="project_title" value={formData.project_title} onChange={handleChange} />
            <label htmlFor="target_audience">Target Audience Description*</label>
            <input type="text" id="target_audience" name="target_audience" placeholder="Who needs to see this?" value={formData.target_audience} onChange={handleChange} required />
            <label htmlFor="source_materials">Link(s) to Source Materials / Assets*</label>
            <textarea id="source_materials" name="source_materials" rows="3" placeholder="Paste Dropbox, Drive, or specific file links here." value={formData.source_materials} onChange={handleChange} required></textarea>
            <label htmlFor="submission_date">Date Brief Was Created*</label>
            <input type="date" id="submission_date" name="submission_date" value={formData.submission_date} onChange={handleChange} required />
          </fieldset>

          <fieldset>
            <legend>Creative Direction & Final Output</legend>
            <label htmlFor="project_goal">What is the main goal of this project? (e.g., drive sales, inform, entertain)*</label>
            <textarea id="project_goal" name="project_goal" rows="3" value={formData.project_goal} onChange={handleChange} required></textarea>
            <label htmlFor="visual_references">Links to style references or mood boards (optional)</label>
            <input type="url" id="visual_references" name="visual_references" placeholder="e.g., Pinterest, YouTube links, existing work." value={formData.visual_references} onChange={handleChange} />
            <label htmlFor="deliverables">List all required final deliverables (e.g., 15s social cut, 4K master file)</label>
            <textarea id="deliverables" name="deliverables" rows="3" value={formData.deliverables} onChange={handleChange}></textarea>
            <label htmlFor="desired_deadline">Desired Deadline for Finished Project</label>
            <input type="date" id="desired_deadline" name="desired_deadline" value={formData.desired_deadline} onChange={handleChange} />
          </fieldset>

          <div className="instructions">
            <h3>Our Process Summary:</h3>
            <p>We'll review your brief and assets within one business day. We will confirm the project scope and timeline before proceeding.</p>
            <p>A watermarked preview will be delivered for feedback. Once approved, we will finalize payment and deliver the clean final files.</p>
          </div>

          <label htmlFor="terms_confirm">I confirm the information above is accurate and complete*</label>
          <div className="radio-group">
            <input type="radio" id="terms_confirm" name="terms_confirm" value="Yes" onChange={handleChange} required />
            <label htmlFor="terms_confirm">Yes, I understand.</label>
          </div>

          <button type="submit">Send Brief to Our Team</button>
        </form>
      </div>
    </section>
  );
};

export default ProjectRegistration;
