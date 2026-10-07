import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import parseHtmlToText from '@/utils/parseHtmlToText';
import formatDate from '@/utils/formatDate';

const categoryLabels = {
  languages: 'Languages',
  frontend: 'Frontend',
  backend: 'Backend',
  databases: 'Databases',
  ai: 'AI & Integrations',
  tools: 'Tools & Platforms'
};

const ProfessionalResume = ({ resumeInfo }) => {
  const tc = resumeInfo?.themeColor || '#000';
  const cats = resumeInfo?.skillCategories || {};

  const styles = StyleSheet.create({
    page: {
      backgroundColor: '#fff',
      fontSize: 10,
      fontFamily: 'Helvetica',
      lineHeight: 1.3,
      padding: 40,
    },
    name: {
      textAlign: 'center',
      fontSize: 22,
      fontWeight: 700,
      marginBottom: 8,
      textTransform: 'uppercase',
    },
    title: {
      textAlign: 'center',
      fontSize: 11,
      marginBottom: 8,
      marginTop: 8,
      color: '#444',
    },
    contactRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      fontSize: 9,
      marginBottom: 12,
      color: '#333',
    },
    contactPipe: {
      marginHorizontal: 5,
      color: '#999',
    },
    sectionTitle: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      marginTop: 12,
      marginBottom: 2,
      paddingBottom: 2,
    },
    sectionRule: {
      borderBottomWidth: 1,
      borderBottomColor: tc,
      marginBottom: 6,
    },
    summary: {
      fontSize: 9,
      textAlign: 'justify',
      lineHeight: 1.4,
      marginBottom: 4,
    },
    skillsGroup: {
      fontSize: 9,
      lineHeight: 1.5,
      marginBottom: 4,
    },
    skillsLabel: {
      fontWeight: 700,
    },
    expItem: {
      marginBottom: 8,
    },
    expHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline',
    },
    expRole: {
      fontSize: 10,
      fontWeight: 700,
    },
    expCompany: {
      fontSize: 9,
      fontStyle: 'italic',
      marginBottom: 1,
    },
    expDates: {
      fontSize: 9,
      color: '#555',
    },
    expDesc: {
      fontSize: 9,
      textAlign: 'justify',
      marginTop: 2,
      lineHeight: 1.4,
      paddingLeft: 10,
    },
    eduItem: {
      marginBottom: 6,
    },
    eduSchool: {
      fontSize: 10,
      fontWeight: 700,
    },
    eduDetail: {
      fontSize: 9,
      color: '#444',
      marginBottom: 1,
    },
    eduDates: {
      fontSize: 9,
      color: '#555',
    },
    projItem: {
      marginBottom: 7,
    },
    projTitle: {
      fontSize: 10,
      fontWeight: 700,
      paddingRight: 5,
    },
    projLink: {
      fontSize: 8,
      color: tc,
      textDecoration: 'underline',
      paddingTop:2
    },
    projDesc: {
      fontSize: 9,
      textAlign: 'justify',
      marginTop: 1,
      lineHeight: 1.4,
      paddingLeft: 10,
    },
  });

  const renderSkills = () => {
    const hasCategories = Object.values(cats).some(v => v?.trim());
    if (hasCategories) {
      return (
        <View style={styles.skillsGroup}>
          {Object.entries(categoryLabels).map(([key, label]) => {
            const val = cats[key]?.trim();
            if (!val) return null;
            return (
              <Text key={key}>
                <Text style={styles.skillsLabel}>{label}: </Text>
                {val}
                {'\n'}
              </Text>
            );
          })}
        </View>
      );
    }

    if (resumeInfo?.skills?.length) {
      return (
        <View style={styles.skillsGroup}>
          <Text>
            <Text style={styles.skillsLabel}>Skills: </Text>
            {resumeInfo.skills.map(s => s.name).join(', ')}
          </Text>
        </View>
      );
    }

    return null;
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>
          {resumeInfo?.firstName} {resumeInfo?.lastName}
        </Text>
        <Text style={styles.title}>{resumeInfo?.jobTitle}</Text>

        <View style={styles.contactRow}>
          <Text>{resumeInfo?.phone}</Text>
          <Text style={styles.contactPipe}>|</Text>
          <Text>{resumeInfo?.email}</Text>
          <Text style={styles.contactPipe}>|</Text>
          <Text>{resumeInfo?.address || 'Bengaluru, India'}</Text>
        </View>

        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <View style={styles.sectionRule} />
        <Text style={styles.summary}>
          {parseHtmlToText(resumeInfo?.summary)}
        </Text>

        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <View style={styles.sectionRule} />
        {renderSkills()}

        <Text style={styles.sectionTitle}>Experience</Text>
        <View style={styles.sectionRule} />
        {resumeInfo?.experience?.map((exp, i) => (
          <View key={i} style={styles.expItem}>
            <View style={styles.expHeader}>
              <Text style={styles.expRole}>{exp?.title}</Text>
              <Text style={styles.expDates}>
                {formatDate(exp?.startDate)} - {exp?.endDate ? formatDate(exp?.endDate) : 'Present'}
              </Text>
            </View>
            <Text style={styles.expCompany}>
              {exp?.companyName}, {exp?.city}, {exp?.state}
            </Text>
            <Text style={styles.expDesc}>
              {parseHtmlToText(exp?.workSummary)}
            </Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Projects</Text>
        <View style={styles.sectionRule} />
        {resumeInfo?.projects?.map((proj, i) => (
          <View key={i} style={styles.projItem}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.projTitle}>{proj?.title}</Text>
              {proj?.link && (
                <Link src={proj.link} style={styles.projLink}>
                  GitHub
                </Link>
              )}
            </View>
            <Text style={styles.projDesc}>
              {parseHtmlToText(proj?.description)}
            </Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Education</Text>
        <View style={styles.sectionRule} />
        {resumeInfo?.education?.map((ed, i) => (
          <View key={i} style={styles.eduItem}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.eduSchool}>{ed?.universityName}</Text>
              <Text style={styles.eduDates}>{formatDate(ed?.startDate)} - {formatDate(ed?.endDate)}</Text>
            </View>
            <Text style={styles.eduDetail}>
              {ed?.degree} in {ed?.major}
            </Text>
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default ProfessionalResume;
