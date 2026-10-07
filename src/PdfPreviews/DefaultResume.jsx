import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import parseHtmlToText from '@/utils/parseHtmlToText';
import formatDate from '@/utils/formatDate';

const DefaultResume = ({ resumeInfo }) => {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: '#fff',
      fontSize: 10,
      fontFamily: 'Helvetica',
      lineHeight: 1.3
    },
    container: {
      borderTopWidth: 15,
      borderColor: resumeInfo?.themeColor || '#000',
      padding: 16
    },
    name: {
      textAlign: 'center',
      fontSize: 17,
      fontWeight: 500,
      marginBottom: 3,
      paddingTop: 6
    
    },
    title: {
      textAlign: 'center',
      fontSize: 10,
      marginBottom: 2,
      marginTop:6
    },
    address: {
      textAlign: 'center',
      fontSize: 9,
      marginBottom: 5
    },
    contactRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 6
    },
    sectionTitle: {
      fontSize: 12,
      fontWeight: 600,
      textAlign: 'center',
      marginTop: 6,
      marginBottom: 4,
      borderBottomWidth: 2,
      paddingBottom: 2
    },
    summary: {
      fontSize: 9,
      textAlign: 'justify',
      marginBottom: 8,
      marginTop: 2,
      paddingTop: 6,
      borderTopWidth: 2,
      lineHeight: 1.4
    },
    expItem: { 
      marginBottom: 6,
      paddingBottom: 2
    },
    expHeader: { 
      flexDirection: 'row', 
      justifyContent: 'space-between',
      marginBottom: 2
    },
    expRole: { 
      fontSize: 10, 
      fontWeight: 'bold', 
      paddingBottom: 2
    },
    expCompany: { 
      fontSize: 8,
      paddingBottom: 1
    },
    expDates: { 
      fontSize: 8,
      paddingBottom: 1
    },
    expDesc: { 
      fontSize: 9, 
      textAlign: 'justify', 
      marginTop: 2,
      paddingBottom: 2,
      lineHeight: 1.4
    },
    eduItem: { 
      marginBottom: 6,
      paddingBottom: 2
    },
    eduSchool: { 
      fontSize: 10, 
      fontWeight: 'bold',
      paddingBottom: 2,
      marginBottom: 1
    },
    eduDegree: { 
      fontSize: 8,
      paddingBottom: 1
    },
    eduDates: { 
      fontSize: 8,
      paddingBottom: 1
    }
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.name}>
            {resumeInfo?.firstName} {resumeInfo?.lastName}
          </Text>
          <Text style={styles.title}>{resumeInfo?.jobTitle}</Text>
          <Text style={styles.address}>{resumeInfo?.address}</Text>

          <View style={styles.contactRow}>
            <Text>{resumeInfo?.phone}</Text>
            <Text>{resumeInfo?.email}</Text>
          </View>

          <Text style={[styles.summary, { borderTopColor: resumeInfo?.themeColor || '#000' }]}>
            {parseHtmlToText(resumeInfo?.summary)}
          </Text>

          {/* Experience */}
          <Text style={[styles.sectionTitle, { borderBottomColor: resumeInfo?.themeColor || '#000' }]}>
            Experience
          </Text>
          {resumeInfo?.experience?.map((exp, i) => (
            <View key={i} style={styles.expItem}>
              <Text style={styles.expRole}>{exp?.title}</Text>
              <View style={styles.expHeader}>
                <Text style={styles.expCompany}>
                  {exp?.companyName}, {exp?.city}, {exp?.state}
                </Text>
                <Text style={styles.expDates}>
                  {formatDate(exp?.startDate)} - {exp?.endDate ? formatDate(exp?.endDate) : 'Present'}
                </Text>
              </View>
              <Text style={styles.expDesc}>
                {parseHtmlToText(exp?.workSummary)}
              </Text>
            </View>
          ))}


          {/* Projects */}
          {resumeInfo?.projects?.length > 0 && (
            <>
              <Text style={[styles.sectionTitle, { borderBottomColor: resumeInfo?.themeColor || '#000' }]}>
                Projects
              </Text>
              {resumeInfo?.projects?.map((proj, i) => (
                <View key={i} style={styles.expItem}>
                  <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    <Text style={styles.expRole}>{proj?.title}</Text>
                    {proj?.link && (
                      <Link src={proj.link} style={{ fontSize: 9, color: resumeInfo?.themeColor || '#000', marginLeft: 6, textDecoration: 'underline' }}>
                        GitHub
                      </Link>
                    )}
                  </View>
                  <Text style={styles.expDesc}>
                    {parseHtmlToText(proj?.description)}
                  </Text>
                </View>
              ))}
            </>
          )}

          {/* Education */}
          <Text style={[styles.sectionTitle, { borderBottomColor: resumeInfo?.themeColor || '#000' }]}>
            Education
          </Text>
          {resumeInfo?.education?.map((ed, i) => (
            <View key={i} style={styles.eduItem}>
              <Text style={styles.eduSchool}>{ed?.universityName}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 }}>
                <Text style={styles.eduDegree}>{ed?.degree} in {ed?.major}</Text>
                <Text style={styles.eduDates}>{formatDate(ed?.startDate)} - {formatDate(ed?.endDate)}</Text>
              </View>
              <Text style={styles.expDesc}>
                {parseHtmlToText(ed?.description)}
              </Text>
            </View>
          ))}

          {/* Skills */}
          <View>
            <Text style={[styles.sectionTitle, { borderBottomColor: resumeInfo?.themeColor || '#000' }]}>
              Skills
            </Text>
            
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 2 }}>
              {resumeInfo?.skills?.map((s, i) => (
                <View 
                  key={i} 
                  style={{ 
                    width: '50%',
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    paddingRight: 10,
                    marginBottom: 5
                  }}
                >
                  <Text style={{ fontSize: 10, marginRight: 6 }}>{s?.name}</Text>
                  <View style={{ 
                    flex: 1, 
                    height: 6, 
                    maxWidth: 70, 
                    backgroundColor: '#ddd', 
                    borderRadius: 3, 
                    overflow: 'hidden' 
                  }}>
                    <View style={{
                      width: `${(s?.rating || 0) * 20}%`,
                      height: '100%',
                      backgroundColor: resumeInfo?.themeColor || '#000',
                      borderRadius: 3
                    }} />
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default DefaultResume;