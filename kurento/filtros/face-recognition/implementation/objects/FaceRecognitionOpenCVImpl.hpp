/* Autogenerated with kurento-module-creator */

#ifndef __FACE_RECOGNITION_OPENCV_IMPL_HPP__
#define __FACE_RECOGNITION_OPENCV_IMPL_HPP__

#include <OpenCVProcess.hpp>
#include "FaceRecognition.hpp"
#include <EventHandler.hpp>

namespace kurento
{
namespace module
{
namespace facerecognition
{

class FaceRecognitionOpenCVImpl : public virtual OpenCVProcess
{

private:
  std::string path;
  int opFilter;
  std::string newPerson;

public:

  FaceRecognitionOpenCVImpl ();

  virtual ~FaceRecognitionOpenCVImpl() = default;

  virtual void process (cv::Mat &mat);

  void setConfig(const std::string &path, const int opFilter, const std::string &newPerson);


};

} /* facerecognition */
} /* module */
} /* kurento */

#endif /*  __FACE_RECOGNITION_OPENCV_IMPL_HPP__ */
