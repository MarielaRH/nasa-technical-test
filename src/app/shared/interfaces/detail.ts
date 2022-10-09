export interface urlDetail {
    location: string
}

export interface Detail {
    "Photoshop:IPTCDigest"?:           string;
    "File:ImageHeight"?:               number;
    "AVAIL:MediaType"?:                string;
    "EXIF:ModifyDate"?:                string;
    "EXIF:ThumbnailLength"?:           number;
    "AVAIL:NASAID"?:                   string;
    "AVAIL:DateCreated"?:              string;
    "XMP:InstanceID"?:                 string;
    "File:YCbCrSubSampling"?:          string;
    "File:FileInodeChangeDate"?:       string;
    "Photoshop:ProgressiveScans"?:     string;
    "EXIF:ImageHeight"?:               number;
    "File:FileSize"?:                  string;
    "EXIF:ExifImageWidth"?:            number;
    "XMP:ColorMode"?:                  string;
    "XMP:History"?:                    XMPHistory[];
    "XMP:ModifyDate"?:                 string;
    "EXIF:YResolution"?:               number;
    "IPTC:ApplicationRecordVersion"?:  number;
    "EXIF:ExifVersion"?:               string;
    "Composite:ThumbnailImage"?:       string;
    "EXIF:ColorSpace"?:                string;
    "File:FileTypeExtension"?:         string;
    "AVAIL:Title"?:                    string;
    "EXIF:Software"?:                  string;
    "AVAIL:Keywords"?:                 string[];
    "EXIF:SamplesPerPixel"?:           number;
    "Composite:Megapixels"?:           number;
    "EXIF:ThumbnailOffset"?:           number;
    "AVAIL:Description"?:              string;
    "EXIF:ResolutionUnit"?:            string;
    "EXIF:Compression"?:               string;
    "EXIF:BitsPerSample"?:             string;
    "Photoshop:XResolution"?:          number;
    "AVAIL:Creator"?:                  null;
    "File:FileType"?:                  string;
    "Photoshop:GlobalAltitude"?:       number;
    "EXIF:Orientation"?:               string;
    "XMP:OriginalDocumentID"?:         string;
    "APP14:DCTEncodeVersion"?:         number;
    "AVAIL:Center"?:                   string;
    "Composite:ImageSize"?:            string;
    "File:CurrentIPTCDigest"?:         string;
    "Photoshop:YResolution"?:          number;
    "EXIF:ImageWidth"?:                number;
    "AVAIL:Location"?:                 string;
    "Photoshop:PhotoshopThumbnail"?:   string;
    "APP14:ColorTransform"?:           string;
    "Photoshop:PhotoshopFormat"?:      string;
    "XMP:MetadataDate"?:               string;
    "XMP:DerivedFrom"?:                XMPDerivedFrom;
    "File:EncodingProcess"?:           string;
    "AVAIL:SecondaryCreator"?:         string;
    "XMP:Format"?:                     string;
    "File:FileAccessDate"?:            string;
    "File:MIMEType"?:                  string;
    "APP14:APP14Flags0"?:              string;
    "IPTC:CodedCharacterSet"?:         string;
    "AVAIL:Album"?:                    string;
    "Photoshop:DisplayedUnitsX"?:      string;
    "File:ImageWidth"?:                number;
    "XMP:CreateDate"?:                 string;
    "APP14:APP14Flags1"?:              string;
    "AVAIL:Photographer"?:             string;
    "XMP:XMPToolkit"?:                 string;
    "EXIF:XResolution"?:               number;
    "File:ColorComponents"?:           number;
    "File:FilePermissions"?:           string;
    "Photoshop:PhotoshopQuality"?:     number;
    "EXIF:ExifImageHeight"?:           number;
    "XMP:DocumentID"?:                 string;
    "File:ExifByteOrder"?:             string;
    "AVAIL:Owner"?:                    string;
    "AVAIL:Description508"?:           string;
    "Photoshop:GlobalAngle"?:          number;
    "File:FileModifyDate"?:            string;
    "ExifTool:ExifToolVersion"?:       number;
    SourceFile?:                       string;
    "Photoshop:DisplayedUnitsY"?:      string;
    "EXIF:PhotometricInterpretation"?: string;
    "AVAIL:DateUploaded"?:             null;
    "XMP:CreatorTool"?:                string;
    "File:BitsPerSample"?:             number;
}

export interface XMPDerivedFrom {
    DocumentID?: string;
    InstanceID?: string;
}

export interface XMPHistory {
    Changed?:       string;
    When?:          string;
    SoftwareAgent?: string;
    InstanceID?:    string;
    Action?:        string;
}
